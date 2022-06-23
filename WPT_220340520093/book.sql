create table book(
bookid int, 
bookname varchar(15),
price int
);

insert into book(bookid, bookname, price)values
(1, 'OCP', 1000),
(2, 'Data Structure', 600),
(3, 'WPT', 800),
(4, 'Database', 700);

select * from book;
