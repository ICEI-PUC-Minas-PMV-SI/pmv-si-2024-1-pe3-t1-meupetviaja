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

### Requisitos Não Funcionais
| Código  | Restrição | Descrição |
|------|------------------------|------------|
|RF1| Ambiente | Interface responsiva adaptável a qualquer interface utilizada - Browser, Smartphone ou Tablet. |
|RF2| Segurança | O produto deve restringir o acesso por meio de senhas individuais para o usuário. |
|RF3| Performance | A página deverá ter disponibilidade em 90% do tempo. |
|RF4| Performance | Deve processar requisições do usuário em no máximo 3s. |
|RF5| Navegação | O sistema deverá ser de fácil navegação. |
|RF6| Usabilidade | O sistema deve ter uma interface intuitiva e amigável, com elementos de design consistentes e feedback claro. |
|RF7| Portabilidade | Garantir a compatibilidade com os principais navegadores da web, como Google Chrome, Mozilla Firefox, Safari e Microsoft Edge. |

### Usuários 
#### Descrição
| # | Ator | Definição |
|------|------------------------|------------|
|1| Usuário | Usuário responsável por cadastrar locais e/ou serviços pet, consultar, avaliá-los, cadastrar dados do seu próprio perfil, comentar, favoritar e denunciar os locais e/ou serviços pet. |
|2| Administrador | Usuário gerente do sistema responsável pela avaliação de denúncias e bloqueio de usuários. Possui acesso geral ao sistema. |

#### Características dos usuários
| # | Ator | Frequência de uso | Nível de instrução | Proficiência na aplicação | Proficiência em informática |
|---|------|-------------------|--------------------|---------------------------|-----------------------------|
|1|Usuário|Diária em qualquer horário |Indefinido|Sim|Sistema|
|2|Administrador|Indefinida |Superior completo|Sim|Sistema Operacional Windows Microsoft Office|
