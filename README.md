Создайте на вашем github репозиторий по следующему шаблону HW#-name. Все результаты нужно запушить в ваш репозиторий и прикрепить ссылку на hillel портале.
Создайте README.md с описанием задания.
Нужно написать webpack сборку. Настройте output чтобы билд был в папке dist и js код собирался в bundle.js (dist/bundle.js).
Добавьте конфиг что бы при создании bundle.js создавался index.html и в него подключался скрипт.
Сделайте чтобы перед сборкой билда папка dist очищалась. 
Добавьте в сборку возможность запуска webpack dev server.d. Добавить script комманду в package.json.
Создайте три класса в отдельных файлах:
 Реализуйте Person который реализует класс Person
name, age, gendor, interests
Реализовать класс Student. Должны наследоваться от Person. Нужно заимпортить класс Person тобы от него отнаследоваться.
Реализовать класс Teacher. Должны наследоваться от Person. Нужно заимпортить класс Person чтобы от него отнаследоваться.
Class Teacher должен иметь дополнительное свойство subject.
В файле index.js заимпортить классы Student and Teacher и создать инстансы (создать обьекты с классов) student и techer. Затем вывести созданные обьекты в консоль.
