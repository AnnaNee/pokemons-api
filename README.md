# Reprograma Coding Dojo

API construída durante o exercício de conding-dojo da Reprograma.


## Instalação:

```
git clone https://github.com/AnnaNee/reprograma-coding-dojo.git
cd reprograma-coding-dojo
npm install
npm start

```
## Instruções:

- Construa uma API que me possibilite criar, alterar, treinar e remover POKÉMONS;
- Cada pokémon deve ter: nome, foto e nível
- Cadastre 10 pokémons através do postman
- Ao criar um pokémon, eu devo informar, obrigatoriamente: nome e foto. O nível, se não for informado, inicializa no 0.
- Ao treinar um pokémon, eu devo informar a data de início e término do treino, além do ID do pokémon que estou treinando. Com base na quantidade de horas entre a data inicial e final, eu devo atualizar o nível do pokémon informado. A cada 4h de treino, o meu pokémon ganha 1 nível.
Ex.: pokémon de ID 1, no nível 0, foi treinado por 20 horas. 20 / 4 = 5. O novo nível do pokémon agora é 5.
Ex. 2: pokémon de ID 2, no nível 3, foi treinado por 10h. 10 / 4 = 2,5. O novo nível do pokémon agora é 5,5.
Ex. 3: pokémon de ID 2, no nível 5,5, foi treinado por 18h. 18 / 4 = 4,5. O novo nível do pokémon agora é 10.
