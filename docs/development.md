# DOCUMENTO DE ESPECIFICAÇÃO DE REQUISITOS DE SOFTWARE

## Objetivos deste documento
Descrever e especificar as necessidades dos tutores de animais de estimação que devem ser atendidas pelo projeto Meu Pet Viaja.

## Escopo do produto

### Nome do produto e seus componentes principais
O produto será um Sistema de Gestão de Locais e Serviços Pet em Minas Gerais e roteiros de viagem com o nome “Meu Pet Viaja”. Ele será composto por quatro componentes (módulos), com elementos necessários à gestão dos locais e serviços, de usuário e de avaliação.
### Missão do produto
Fornecer uma plataforma colaborativa para compartilhamento de locais e serviços pet com o intuito de facilitar a gestão das viagens dos usuários.
### Limites do produto
O Sistema de Gestão de Locais e Serviços Pet atualmente não oferece opção para agendamento de reservas e sua área de cobertura é limitada, não incluindo regiões fora de Minas Gerais.
### Benefícios do produto
|#    | Benefíco | Valor para o Cliente |
|------|------------------------|------------|
|1| Facilidade no compartilhamento de locais e serviços pet | Essencial |
|2| Facilidade na consulta de locais e serviços pet | Essencial |
|3| Facilidade na geração de roteiros de viagem | Essencial|  
|4| Segurança no cadastro de usuários | Essencial |   
|5| Segurança no cadastro de locais e serviços pet  | Essencial | 

## Descrição geral do produto

### Requisitos Funcionais
|Código   | Funcionalidade | Descrição |
|------|------------------------|------------|
|RF1| Gerenciar Regras e Dicas de Viagem | O sistema deve permitir ao administrador o processamento de Inclusão, Alteração e Consulta pelo administrador |
|RF2| Gerenciar Denúncia de Local e/ou Serviço Pet | O sistema deve permitir ao administrador o processamento de Validação, Pesquisa e Recusa de denúncia de local e/ou serviço pet pelo Administrador do sistema |
|RF3| Gerenciar Denúncia de Comentário | O sistema deve permitir ao administrador o processamento de Validação, Pesquisa e Recusa de denúncia de comentário pelo Administrador do sistema |
|RF4| Gerenciar Locais e Serviços Pet | O sistema deve permitir ao administrador e usuário o processamento de Inclusão, Alteração e Exclusão de locais e serviços pet pelos usuários |
|RF5| Gerenciar Comentário de Locais e Serviços Pet | O sistema deve permitir ao usuário Processamento de Inclusão, Alteração, Exclusão de comentário. |
|RF6| Buscar Local e/ou Serviço Pet | O sistema deve permitir ao usuário pesquisar local e/ou serviço pet na lista geral (locais e serviços pet de todos os usuários) |
|RF7| Gerenciar Usuários | O sistema deve permitir ao administrador o processamento de Inclusão, Alteração, Consulta e Bloqueio de usuário |
|RF8| Denunciar Local e/ou Serviço Pet | Processamento de Inclusão de denúncia de local e/ou serviço pet |
|RF9| Denunciar Comentário | O sistema deve permitir ao usuário o processamento de Inclusão de denúncia de comentário |
|RF10| Gerenciar Locais e/ou Serviços Pet Favoritos | O sistema deve permitir ao usuário o processamento de Inclusão, Exclusão e Consulta de local e/ou serviço pet na lista de favoritos |
|RF11| Filtrar Locais e Serviços Pet por Avaliação e Pontuação | O sistema deve oferecer aos usuários a capacidade de filtrar a lista de locais e serviços pet com base em critérios de avaliação e pontuação, permitindo uma pesquisa mais refinada e personalizada conforme as preferências do usuário |
|RF12| Entrar no Sistema | Processamento de login de usuário cadastrado |
|RF13| Sair do Sistema | Processamento de saída de usuário do sistema |
|RF14| Validar Senha | Processamento de validação de senha no login |

Para atender aos requisitos funcionais citados acima foramdesenvolvidas as sguintes páginas: Transporte, Destino em MG e Cadastro de Estabelecimento
Ao acessar a página Transporte, será exibo seções descrevendo os informações e dicas de viagens e estabelecimentos *pet friendly*.

![Titulo](img/Transporte1.png)
![Titulo](img/transporte2.png)

Esta página HTML contém seções que fornecem informações e dicas úteis sobre como viajar com pets. Também inclui detalhes sobre vários tipos de acomodações e estabelecimentos relacionados.

## Pesquisa 

Ao acessar a página de destino, você encontrará um filtro que permite pesquisar estabelecimentos por tipo e cidade. A página também apresenta cards com informações detalhadas sobre cada estabelecimento específico.

![Titulo](img/destinos1.png)

## Cadastro 

Ao acessar a página de Cadastro de Estabelecimento, você encontrará um formulario que permite cadastrar estabelecimentos.

![Titulo](img/cadastro-estabelecimento.png)


## Descrição das estruturas:

## Cadastro de usuário
|  **Nome**      | **Tipo**          | **Descrição**                             | **Exemplo**                                    |
|:--------------:|-------------------|-------------------------------------------|------------------------------------------------|
| ID          | Numero (Inteiro)   | Identificador único do usuário  | 0001                |
| Nome        | Texto              | Nome do usuario                 | Guilherme Arantes  |
| Usuário     | Texto              | Nome de usuário                 | guiarantes         |
| E-mail      | Texto              | E-mail do usuário               | guiarantes@casapet.com.br|
| Senha       | Texto              | Senha do usuário	               | abC#768          |
| Foto        | File               | Foto do usuário                 | https://i.imgur.com/z7mkc1I.jpg |

## Cadastro de Estabelecimento
|  **Nome**      | **Tipo**          | **Descrição**                             | **Exemplo**                                    |
|:--------------:|-------------------|-------------------------------------------|------------------------------------------------|
| Nome do Estabelecimento       | Texto             | Nome do Estabelecimento                 | Casa PET |
|Tipo de estabelecimento        | Texto             | Tipo de estabelecimento                 | Hospedagem |
| E-mail       | Texto             | E-mail do Estabelecimento                | informacao@casapet.com.br|
| Telefone      | Texto             | Telefone do Estabelecimento                | 3433589627|
| Endereço    | Texto             | Logadouro do estabelecimento       | Rua. horizontes  |
| Cidade      | Texto             | Cidade do estabelecimento    | Mariana   |
| ID          | Numero (Inteiro)  | Identificador único do Estabelecimento  | 0001                |
| Estado      | Texto             | Estado do estabelecimento    |  MG    |
| Website    | Texto             | Site do estabelecimento                  | casapet.com.br       | 
| Instagram   | Texto             | Instagram do estabelecimento                  | @casapet       | 
| Descrição   | Texto             | Descrição do estabelecimento           | Hotel pet-friendly localizado em Mariana - MG |
| Foto        | File              | Foto do estabelecimento                | https://i.imgur.com/JEzXkMF.jpg |
| Alt Foto    | Texto             | Texto acessível para foto              | Foto da fachada do hotel com o nome Casa Pet |

## Cadastro de Depoimento
|  **Nome**      | **Tipo**          | **Descrição**                             | **Exemplo**                                    |
|:--------------:|-------------------|-------------------------------------------|------------------------------------------------|
| ID               | Numero (Inteiro)  | Identificador  do comentario    | 0001                |
| Nome             | Texto             | Nome do usuario                 | Adriana Temponi  |
| Nota             | Numero (Inteiro)  | Nota dada ao estabelecimento       | 4  |
| Data de Entrada  | Texto             | Periodo da visita        |14/05/2023    |
| Data de Saida    | Texto             | Periodo da visita        |16/05/2023    |
| Descrição        | Texto             | Descrição da experiencia do usuario   |  "Amei minha estadia em um lugar pet friendly incrível! O ambiente era acolhedor, a equipe era atenciosa e meu peludo foi tratado como um rei. Recomendo a todos!"    |
