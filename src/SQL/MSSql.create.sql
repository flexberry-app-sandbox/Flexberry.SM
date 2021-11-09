﻿



CREATE TABLE [Customer] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [Name] VARCHAR(255)  NULL,

	 [Surname] VARCHAR(255)  NULL,

	 [Phone] VARCHAR(255)  NULL,

	 [Email] VARCHAR(255)  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [ServiceProvider] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [Name] VARCHAR(255)  NULL,

	 [ContactInfo] VARCHAR(255)  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [CustomerRequest] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [RequestDate] DATETIME  NULL,

	 [RequestText] VARCHAR(255)  NULL,

	 [Customer_m0] UNIQUEIDENTIFIER  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [Ticket] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [TicketDate] DATETIME  NULL,

	 [Customer_m0] UNIQUEIDENTIFIER  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [TicketPosition] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [Amount] INT  NULL,

	 [Event_m0] UNIQUEIDENTIFIER  NOT NULL,

	 [Ticket_m0] UNIQUEIDENTIFIER  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [Event] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [EventDate] DATETIME  NULL,

	 [EventType] VARCHAR(11)  NULL,

	 [StartTime] VARCHAR(255)  NULL,

	 [Duration] VARCHAR(255)  NULL,

	 [Description] VARCHAR(255)  NULL,

	 [ServiceProvider_m0] UNIQUEIDENTIFIER  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [Feedback] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [Ranking] INT  NULL,

	 [FeedbackText] VARCHAR(255)  NULL,

	 [Customer_m0] UNIQUEIDENTIFIER  NOT NULL,

	 [Event_m0] UNIQUEIDENTIFIER  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [STORMNETLOCKDATA] (

	 [LockKey] VARCHAR(300)  NOT NULL,

	 [UserName] VARCHAR(300)  NOT NULL,

	 [LockDate] DATETIME  NULL,

	 PRIMARY KEY ([LockKey]))


CREATE TABLE [STORMSETTINGS] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [Module] varchar(1000)  NULL,

	 [Name] varchar(255)  NULL,

	 [Value] text  NULL,

	 [User] varchar(255)  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [STORMAdvLimit] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [User] varchar(255)  NULL,

	 [Published] bit  NULL,

	 [Module] varchar(255)  NULL,

	 [Name] varchar(255)  NULL,

	 [Value] text  NULL,

	 [HotKeyData] int  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [STORMFILTERSETTING] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [Name] varchar(255)  NOT NULL,

	 [DataObjectView] varchar(255)  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [STORMWEBSEARCH] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [Name] varchar(255)  NOT NULL,

	 [Order] INT  NOT NULL,

	 [PresentView] varchar(255)  NOT NULL,

	 [DetailedView] varchar(255)  NOT NULL,

	 [FilterSetting_m0] uniqueidentifier  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [STORMFILTERDETAIL] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [Caption] varchar(255)  NOT NULL,

	 [DataObjectView] varchar(255)  NOT NULL,

	 [ConnectMasterProp] varchar(255)  NOT NULL,

	 [OwnerConnectProp] varchar(255)  NULL,

	 [FilterSetting_m0] uniqueidentifier  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [STORMFILTERLOOKUP] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [DataObjectType] varchar(255)  NOT NULL,

	 [Container] varchar(255)  NULL,

	 [ContainerTag] varchar(255)  NULL,

	 [FieldsToView] varchar(255)  NULL,

	 [FilterSetting_m0] uniqueidentifier  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [UserSetting] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [AppName] varchar(256)  NULL,

	 [UserName] varchar(512)  NULL,

	 [UserGuid] uniqueidentifier  NULL,

	 [ModuleName] varchar(1024)  NULL,

	 [ModuleGuid] uniqueidentifier  NULL,

	 [SettName] varchar(256)  NULL,

	 [SettGuid] uniqueidentifier  NULL,

	 [SettLastAccessTime] DATETIME  NULL,

	 [StrVal] varchar(256)  NULL,

	 [TxtVal] varchar(max)  NULL,

	 [IntVal] int  NULL,

	 [BoolVal] bit  NULL,

	 [GuidVal] uniqueidentifier  NULL,

	 [DecimalVal] decimal(20,10)  NULL,

	 [DateTimeVal] DATETIME  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [ApplicationLog] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [Category] varchar(64)  NULL,

	 [EventId] INT  NULL,

	 [Priority] INT  NULL,

	 [Severity] varchar(32)  NULL,

	 [Title] varchar(256)  NULL,

	 [Timestamp] DATETIME  NULL,

	 [MachineName] varchar(32)  NULL,

	 [AppDomainName] varchar(512)  NULL,

	 [ProcessId] varchar(256)  NULL,

	 [ProcessName] varchar(512)  NULL,

	 [ThreadName] varchar(512)  NULL,

	 [Win32ThreadId] varchar(128)  NULL,

	 [Message] varchar(2500)  NULL,

	 [FormattedMessage] varchar(max)  NULL,

	 PRIMARY KEY ([primaryKey]))




 ALTER TABLE [CustomerRequest] ADD CONSTRAINT [CustomerRequest_FCustomer_0] FOREIGN KEY ([Customer_m0]) REFERENCES [Customer]
CREATE INDEX CustomerRequest_ICustomer_m0 on [CustomerRequest] ([Customer_m0])

 ALTER TABLE [Ticket] ADD CONSTRAINT [Ticket_FCustomer_0] FOREIGN KEY ([Customer_m0]) REFERENCES [Customer]
CREATE INDEX Ticket_ICustomer_m0 on [Ticket] ([Customer_m0])

 ALTER TABLE [TicketPosition] ADD CONSTRAINT [TicketPosition_FEvent_0] FOREIGN KEY ([Event_m0]) REFERENCES [Event]
CREATE INDEX TicketPosition_IEvent_m0 on [TicketPosition] ([Event_m0])

 ALTER TABLE [TicketPosition] ADD CONSTRAINT [TicketPosition_FTicket_0] FOREIGN KEY ([Ticket_m0]) REFERENCES [Ticket]
CREATE INDEX TicketPosition_ITicket_m0 on [TicketPosition] ([Ticket_m0])

 ALTER TABLE [Event] ADD CONSTRAINT [Event_FServiceProvider_0] FOREIGN KEY ([ServiceProvider_m0]) REFERENCES [ServiceProvider]
CREATE INDEX Event_IServiceProvider_m0 on [Event] ([ServiceProvider_m0])

 ALTER TABLE [Feedback] ADD CONSTRAINT [Feedback_FCustomer_0] FOREIGN KEY ([Customer_m0]) REFERENCES [Customer]
CREATE INDEX Feedback_ICustomer_m0 on [Feedback] ([Customer_m0])

 ALTER TABLE [Feedback] ADD CONSTRAINT [Feedback_FEvent_0] FOREIGN KEY ([Event_m0]) REFERENCES [Event]
CREATE INDEX Feedback_IEvent_m0 on [Feedback] ([Event_m0])

 ALTER TABLE [STORMWEBSEARCH] ADD CONSTRAINT [STORMWEBSEARCH_FSTORMFILTERSETTING_0] FOREIGN KEY ([FilterSetting_m0]) REFERENCES [STORMFILTERSETTING]

 ALTER TABLE [STORMFILTERDETAIL] ADD CONSTRAINT [STORMFILTERDETAIL_FSTORMFILTERSETTING_0] FOREIGN KEY ([FilterSetting_m0]) REFERENCES [STORMFILTERSETTING]

 ALTER TABLE [STORMFILTERLOOKUP] ADD CONSTRAINT [STORMFILTERLOOKUP_FSTORMFILTERSETTING_0] FOREIGN KEY ([FilterSetting_m0]) REFERENCES [STORMFILTERSETTING]

