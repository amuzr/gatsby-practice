---
title: "각 DB 에서 LIMIT 구현하기"
category: "tech"
cover: "https://unsplash.it/400/300/?random?AngelsofMist"
date: "2016-02-15 15:39:33 +0900"
slug: "limit-in-each-databases"
tags: 
  - db
---

LIMIT 구현
```sql
-- DB2
select * from table fetch first 10 rows only
-- Informix
select first 10 * from table
-- Microsoft SQL Server and Access
select top 10 * from table
-- MySQL and PostgreSQL
select * from table limit 10
-- Oracle
select * from (select * from table) where rownum <= 10
```
