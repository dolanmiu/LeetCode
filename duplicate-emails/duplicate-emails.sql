# Write your MySQL query statement below
select Email from (
    select count(*) as c, Email from Person group by Email
) a
where a.c > 1