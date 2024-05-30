# Especificações do Projeto

## Personas

### Viajante

1. Senhora Inês tem 60 anos, é aposentada, possui renda extra com serviços que faz de costura, é formada em Design de Moda e reside em Santos/SP. Durante a pandemia de covid-19, ficou viúva do seu marido após um casamento de 30 anos por complicações da doença. Na tentativa de manter sua saúde mental e emocional, decidiu adotar a cadelinha Nala para ter uma companhia em casa. Sempre gostou muito de viajar com seu marido e, devido à perda, está procurando opções de destinos em Minas Gerais que sejam *pet friendly* para que Nala seja sua companheira de viagem. Inês desconhece as regras de viagem de avião para embarcar com Nala e tem encontrado dificuldades em localizar hospedagens e estabelecimentos que aceitem a cadelinha.

###  Proprietário de estabelecimento

1.  Vitor Santos tem 42 anos, é empresário e dono de um estabelecimento *pet-friendly* em Poços de Caldas, MG. Além de ser uma pousada, o espaço também funciona como restaurante e conta com um espaço exclusivo para os pets brincarem. Vitor sempre teve animais de estimação e atualmente possui um gato mestiço, Mingau, que faz companhia no seu dia a dia, e, por vezes, fica na pousada. Ele busca divulgar seu estabelecimento para pessoas que desejam viajar com seu pet, pois considera um diferencial quando comparado aos seus concorrentes.

## Histórias de Usuários

Com base na análise das personas, foram identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
| Viajante | Ter acesso às regras de viagem com meu pet | Viajar com meu pet |
| Viajante | Localizar hospedagens pet friendly em Minas Gerais | Hospedar com meu pet em destinos no estado de Minas Gerais |
| Viajante | Conhecer locais públicos e privados em Minas Gerais que sejam pet friendly | Passear com meu pet durante a viagem |
| Viajante | Acessar comentários e feedback de outros viajantes | Me basear e escolher uma acomodação pet friendly |
| Proprietário de Estabelecimento | Cadastrar meu estabelecimento pet friendly no site | Conseguir mais clientes |
| Proprietário de Estabelecimento | Disponibilizar fotos do estabelecimento com animais dos clientes | Divulgar o estabelecimento |

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| Disponibilizar área com informações com regras de viagem de avião com pet | ALTA |   
|RF-002| Disponibilizar área com informações com regras de viagem de ônibus com pet | ALTA |
|RF-003| Disponibilizar área com informações com regras de viagem de carro com pet | ALTA |  
|RF-004| Disponibilizar área com informações de hospedagens *pet friendly* em Minas Gerais | ALTA |  
|RF-005| Disponibilizar área com informações de estabelecimentos comerciais privados *pet friendly* em Minas Gerais | ALTA | 
|RF-006| Disponibilizar área com informações de locais públicos *pet friendly* em Minas Gerais | ALTA | 
|RF-007| Disponibilizar página em que o usuário poderá inserir e consultar depoimentos/feedback sobre hospedagens e estabelecimentos *pet friendly* em Minas Gerais | ALTA |
|RF-008| Disponibilizar funcionalidade que permita pesquisar hospedagens *pet friendly* em Minas Gerais | MÉDIA | 
|RF-009| Disponibilizar funcionalidade que permita pesquisar estabelecimentos comerciais privados *pet friendly* em Minas Gerais | MÉDIA |
|RF-010| Disponibilizar funcionalidade que permita pesquisar locais publicos *pet friendly* em Minas Gerais | MÉDIA |
|RF-011| Disponibilizar página para proprietários de estabelecimentos enviearem informações sobre seus negócios para serem avaliadas e adicionadas à lista de hospedagens e locais pet friendly  | MÉDIA |
|RF-012| Disponibilizar funcionalidade que permita definir perfil de usuário anônimo ou identificado para depoimentos | BAIXA |  
|RF-013| Criar funcionalidade para curtir e comentar os depoimentos	| BAIXA |  
|RF-014| Disponibilizar área para login de pessoa jurÍdica para manutenção de página | BAIXA |
|RF-015| O sistema deve permitir que os usuários classifiquem os estabelecimentos de 0 a 5 estrelas, a classificação será usada para gerar rankings de estabelecimentos com base na média das classificações | BAIXA |

### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| Interface responsiva adaptável a qualquer interface utilizada - Browser, Smartphone ou Tablet	 | ALTA | 
|RNF-002| Disponibilidade de adaptação da interface pró acessibilidade	| MÉDIA | 
|RNF-003| A página deverá ter disponibilidade em 90% do tempo	 |  BAIXA | 
|RNF-004| Deve processar requisições do usuário em no máximo 3s |  BAIXA | 

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre, não podendo extrapolar a data de 12/07/2023 |
|02| Não pode ser desenvolvido um módulo de BackEnd        |
|03| A abrangência do projeto limita-se à Minas Gerais     |
|04| FrontEnd desenvolvido em HTML, CSS e JavaScript       |
