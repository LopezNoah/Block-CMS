CREATE TABLE `BlockType` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `Block` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`pageId` integer,
	`zone` text NOT NULL,
	`blockTypeId` integer,
	FOREIGN KEY (`pageId`) REFERENCES `Page`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`blockTypeId`) REFERENCES `BlockType`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `Page` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`description` text,
	`layout` text,
	`title` text
);
