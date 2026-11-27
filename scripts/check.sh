#!/bin/sh
# Проверки собранного сайта (запускать после npm run build).
set -u
fail=0

# Запрещённые слова и длинное тире. «РФ» ищем отдельным словом,
# иначе регистронезависимый поиск ловит «интерфейс».
hits=$(grep -rnoE "(^|[^а-яёА-ЯЁ])РФ([^а-яёА-ЯЁ]|$)|России|152-ФЗ|ИНН|ОГРН|ИП Фролов|datalyzed|veyalab\.ru|GDPR|Certified|VLAB|—" dist/ 2>/dev/null)
if [ -n "$hits" ]; then echo "Forbidden strings found:"; echo "$hits"; fail=1; fi

# В EN-страницах не должно быть упоминаний компаний из RU-версии.
for f in dist/index.html dist/privacy.html dist/404.html; do
  if grep -qiE "Yandex|T-Bank|Tinkoff|Яндекс|Т-Банк" "$f"; then echo "Company names found in $f"; fail=1; fi
done

# Обязательные файлы.
for f in index.html ru/index.html privacy.html ru/privacy.html 404.html CNAME; do
  [ -f "dist/$f" ] || { echo "Missing dist/$f"; fail=1; }
done
grep -qx "veyalab.com" dist/CNAME || { echo "CNAME must be veyalab.com"; fail=1; }

[ $fail -eq 0 ] && echo "All checks passed."
exit $fail
