-- Enable uuid extension

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";



-- users table

CREATE TABLE users (

id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),

email VARCHAR(255) UNIQUE NOT NULL,

created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,

updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,

full_name VARCHAR(255),

customer_id VARCHAR(255) UNIQUE,

price_id VARCHAR(255),

status VARCHAR(50) DEFAULT 'inactive'
);



--PDF summaries table (for storing pdf processing results)

CREATE TABLE pdf_summaries(

id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),

user_id VARCHAR(255) NOT NULL,

orignal_file_url TEXT NOT NULL,

summary_text TEXT NOT NULL,

status VARCHAR(50) DEFAULT 'completed',

title TEXT,

file_name TEXT,

created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,

updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP

);



--payments TABLE

CREATE TABLE payments (

id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),

amount INTEGER NOT NULL,

status VARCHAR(50) NOT NULL,

stripe_payment_id VARCHAR(255) UNIQUE NOT NULL,

price_id VARCHAR(255) NOT NULL,

user_email VARCHAR(255) NOT NULL REFERENCES users(email),

created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,

updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP

);



-- created updates_At trigger function

CREATE OR REPLACE FUNCTION update_updated_at_column()

RETURNS TRIGGER AS $$

BEGIN
   NEW.updated_at = CURRENT_TIMESTAMP;
   RETURN NEW;

END;
$$ language 'plpgsql';



-- add triggers to update updated_At

CREATE TRIGGER update_users_updated_at

 BEFORE UPDATE ON users

 FOR EACH ROW

 EXECUTE FUNCTION update_updated_at_column();



CREATE TRIGGER update_posts_updated_at

 BEFORE UPDATE ON posts

 FOR EACH ROW

 EXECUTE FUNCTION update_updated_at_column();



CREATE TRIGGER update_pdf_summaries_updated_at

 BEFORE UPDATE ON pdf_summaries

 FOR EACH ROW
EXECUTE FUNCTION update_updated_at_column();



CREATE TRIGGER update_payments_updated_updated_at

 BEFORE UPDATE ON payments_updated

 FOR EACH ROW

 EXECUTE FUNCTION update_updated_at_column();