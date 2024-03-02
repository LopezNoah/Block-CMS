CREATE TABLE `BlockType` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `Block` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text NOT NULL,
	`pageId` integer NOT NULL,
	`zone` text NOT NULL,
	`blockTypeId` integer NOT NULL,
	FOREIGN KEY (`pageId`) REFERENCES `Page`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`blockTypeId`) REFERENCES `BlockType`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `Page` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`description` text,
	`layout` text NOT NULL,
	`title` text NOT NULL
);
