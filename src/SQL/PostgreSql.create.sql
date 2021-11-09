﻿




CREATE TABLE Customer (
 primaryKey UUID NOT NULL,
 Name VARCHAR(255) NULL,
 Surname VARCHAR(255) NULL,
 Phone VARCHAR(255) NULL,
 Email VARCHAR(255) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ServiceProvider (
 primaryKey UUID NOT NULL,
 Name VARCHAR(255) NULL,
 ContactInfo VARCHAR(255) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE CustomerRequest (
 primaryKey UUID NOT NULL,
 RequestDate TIMESTAMP(3) NULL,
 RequestText VARCHAR(255) NULL,
 Customer_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Ticket (
 primaryKey UUID NOT NULL,
 TicketDate TIMESTAMP(3) NULL,
 Customer_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE TicketPosition (
 primaryKey UUID NOT NULL,
 Amount INT NULL,
 Event_m0 UUID NOT NULL,
 Ticket_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Event (
 primaryKey UUID NOT NULL,
 EventDate TIMESTAMP(3) NULL,
 EventType VARCHAR(11) NULL,
 StartTime VARCHAR(255) NULL,
 Duration VARCHAR(255) NULL,
 Description VARCHAR(255) NULL,
 ServiceProvider_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Feedback (
 primaryKey UUID NOT NULL,
 Ranking INT NULL,
 FeedbackText VARCHAR(255) NULL,
 Customer_m0 UUID NOT NULL,
 Event_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMNETLOCKDATA (
 LockKey VARCHAR(300) NOT NULL,
 UserName VARCHAR(300) NOT NULL,
 LockDate TIMESTAMP(3) NULL,
 PRIMARY KEY (LockKey));


CREATE TABLE STORMSETTINGS (
 primaryKey UUID NOT NULL,
 Module VARCHAR(1000) NULL,
 Name VARCHAR(255) NULL,
 Value TEXT NULL,
 "User" VARCHAR(255) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMAdvLimit (
 primaryKey UUID NOT NULL,
 "User" VARCHAR(255) NULL,
 Published BOOLEAN NULL,
 Module VARCHAR(255) NULL,
 Name VARCHAR(255) NULL,
 Value TEXT NULL,
 HotKeyData INT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMFILTERSETTING (
 primaryKey UUID NOT NULL,
 Name VARCHAR(255) NOT NULL,
 DataObjectView VARCHAR(255) NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMWEBSEARCH (
 primaryKey UUID NOT NULL,
 Name VARCHAR(255) NOT NULL,
 "Order" INT NOT NULL,
 PresentView VARCHAR(255) NOT NULL,
 DetailedView VARCHAR(255) NOT NULL,
 FilterSetting_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMFILTERDETAIL (
 primaryKey UUID NOT NULL,
 Caption VARCHAR(255) NOT NULL,
 DataObjectView VARCHAR(255) NOT NULL,
 ConnectMasterProp VARCHAR(255) NOT NULL,
 OwnerConnectProp VARCHAR(255) NULL,
 FilterSetting_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMFILTERLOOKUP (
 primaryKey UUID NOT NULL,
 DataObjectType VARCHAR(255) NOT NULL,
 Container VARCHAR(255) NULL,
 ContainerTag VARCHAR(255) NULL,
 FieldsToView VARCHAR(255) NULL,
 FilterSetting_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE UserSetting (
 primaryKey UUID NOT NULL,
 AppName VARCHAR(256) NULL,
 UserName VARCHAR(512) NULL,
 UserGuid UUID NULL,
 ModuleName VARCHAR(1024) NULL,
 ModuleGuid UUID NULL,
 SettName VARCHAR(256) NULL,
 SettGuid UUID NULL,
 SettLastAccessTime TIMESTAMP(3) NULL,
 StrVal VARCHAR(256) NULL,
 TxtVal TEXT NULL,
 IntVal INT NULL,
 BoolVal BOOLEAN NULL,
 GuidVal UUID NULL,
 DecimalVal DECIMAL(20,10) NULL,
 DateTimeVal TIMESTAMP(3) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ApplicationLog (
 primaryKey UUID NOT NULL,
 Category VARCHAR(64) NULL,
 EventId INT NULL,
 Priority INT NULL,
 Severity VARCHAR(32) NULL,
 Title VARCHAR(256) NULL,
 Timestamp TIMESTAMP(3) NULL,
 MachineName VARCHAR(32) NULL,
 AppDomainName VARCHAR(512) NULL,
 ProcessId VARCHAR(256) NULL,
 ProcessName VARCHAR(512) NULL,
 ThreadName VARCHAR(512) NULL,
 Win32ThreadId VARCHAR(128) NULL,
 Message VARCHAR(2500) NULL,
 FormattedMessage TEXT NULL,
 PRIMARY KEY (primaryKey));



 ALTER TABLE CustomerRequest ADD CONSTRAINT FK08c426dc0a77fa39bc2730dc7ffd797f5e95915d FOREIGN KEY (Customer_m0) REFERENCES Customer; 
CREATE INDEX Index08c426dc0a77fa39bc2730dc7ffd797f5e95915d on CustomerRequest (Customer_m0); 

 ALTER TABLE Ticket ADD CONSTRAINT FKde592d3dee22a1e95bd7cd5d53f9d71a0b6932a5 FOREIGN KEY (Customer_m0) REFERENCES Customer; 
CREATE INDEX Indexde592d3dee22a1e95bd7cd5d53f9d71a0b6932a5 on Ticket (Customer_m0); 

 ALTER TABLE TicketPosition ADD CONSTRAINT FK55f69b6831e7ba72202b494a27c828ace0372a1b FOREIGN KEY (Event_m0) REFERENCES Event; 
CREATE INDEX Index55f69b6831e7ba72202b494a27c828ace0372a1b on TicketPosition (Event_m0); 

 ALTER TABLE TicketPosition ADD CONSTRAINT FKaa30a91009abe672eb83f8bbca21d06db44eca21 FOREIGN KEY (Ticket_m0) REFERENCES Ticket; 
CREATE INDEX Indexaa30a91009abe672eb83f8bbca21d06db44eca21 on TicketPosition (Ticket_m0); 

 ALTER TABLE Event ADD CONSTRAINT FKe36c9bb4a09c682270189a97411e5d33da65b4f7 FOREIGN KEY (ServiceProvider_m0) REFERENCES ServiceProvider; 
CREATE INDEX Indexe36c9bb4a09c682270189a97411e5d33da65b4f7 on Event (ServiceProvider_m0); 

 ALTER TABLE Feedback ADD CONSTRAINT FK6a8f4fd38ec3f377725ed927f5ab2ab33fab5e97 FOREIGN KEY (Customer_m0) REFERENCES Customer; 
CREATE INDEX Index6a8f4fd38ec3f377725ed927f5ab2ab33fab5e97 on Feedback (Customer_m0); 

 ALTER TABLE Feedback ADD CONSTRAINT FKc1edd24989b7e61a9b0f93f6d8d0c4b6399d6ae0 FOREIGN KEY (Event_m0) REFERENCES Event; 
CREATE INDEX Indexc1edd24989b7e61a9b0f93f6d8d0c4b6399d6ae0 on Feedback (Event_m0); 

 ALTER TABLE STORMWEBSEARCH ADD CONSTRAINT FKc4378e39870eb056aec84088683297a01d2a6200 FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 

 ALTER TABLE STORMFILTERDETAIL ADD CONSTRAINT FK921d16269835017e2a0d0e29ad6fb175454a70d0 FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 

 ALTER TABLE STORMFILTERLOOKUP ADD CONSTRAINT FKce38ef0db3f01a53acaa49fed8853fb941ad47ba FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 

