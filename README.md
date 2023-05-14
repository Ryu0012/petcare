# petcare

## screen composition diagram

[globalRouter]

- / -> home
- /login -> login

[userRouter]

- /user/choice
- /user/edit/:id

[petRouter]

- /pet
- /pet/edit/:id

[familyRouter]

- /family -> messege & calendar

[iotRouter]

- /iot
- /iot/edit

=============================

## dependencies, devDependencies

- ejs
- express
- mongoose: DB
- morgan: HTTP request logger middleware for nodejs

- babel - Javascript compiler.
- nodemon - node monitor 파일이 수정되면 노드 애플리케이션 재시작
