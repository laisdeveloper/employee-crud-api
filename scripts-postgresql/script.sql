create extension if not exists "uuid-ossp"

create table employee (
	employeeID uuid primary key not null default uuid_generate_v4(),
	name varchar(255) not null,
	jobRole varchar(255) not null,
	salary numeric(5, 2),
	dateOfBirth date not null,
	employeeRegistration integer not null
)

select *
from employee