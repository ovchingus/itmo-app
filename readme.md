# 😎🤳 Gtfo cdo

Проект посвященный облегчению жизни студентов университета ИТМО, а именно - упрощению процесса списывания в цдо.

### Развертывание

Тут все просто: 
```
git clone git@github.com:ovchingus/gtfo-cdo.git

cd ./gtfo-cdo

yarn install

yarn build && yarn start
```

### Как работать
По тикетам (github issues): 
1) Выбрать **issue** 
2) Создать ветку с названием `dev-[номер issue]`, например `dev-10`
3) Зафигачить код
4) Запушить коммит
5) Сделать пулл реквест с названием **issue**, например для **issue** с именем `Затащить Бабель для сервера #10` ПР с именем `Затащить Бабель для сервера #10` 😑
6)  😎 shit done

Быстрые правки:
1) Писать код в ветке с названием `hotfix-[содержательное название]`, например `hotfix-CodequalityWatcherCardModule`
2) Делать пр из этой ветки, с названием как у ветки

### Сервер
Сервер предназначается исключительно для получения данных о работе сотрудников в цдо. Дело в том, что из за политики CORS данные о графике сотрудников невозможно получить client-side GET запросом. Поэтому был использован наипростейший сервер на node.js без дополнительных зависимостей.