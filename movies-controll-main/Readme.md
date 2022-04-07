# Instruções de uso

- Instalar componentes do backend e frontend (npm i)
- Backend na porta 5000
- Frontend na porta 3000
- Banco de Dados - Mysql 
    - Comando para criação do Banco de Dados:
         CREATE database movies_control
    
    - Comando para criação da tabela movies:
    
         CREATE TABLE MOVIES(
             id INT primary KEY auto_increment,
             type INT NOT NULL,
             name VARCHAR(30) NOT NULL,
             total_ep INT,
             atual_ep INT,
             last_view timestamp DEFAULT CURRENT_TIMESTAMP
         )
    
    - Comando para inserir dados na tabela movies:
    
        insert into movies (type, name, total_ep, atual_ep) values (1, "Debi & Loide", 1, 1);
        insert into movies (type, name, total_ep, atual_ep) values (1, "Deixa Rolar", 1, 1);
        insert into movies (type, name, total_ep, atual_ep) values (0, "Titans", 12, 4);
        insert into movies (type, name, total_ep, atual_ep) values (0, "Cidade Invisivel", 10, 3); 
