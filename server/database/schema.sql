CREATE TABLE `encounter` (
                         `id` integer PRIMARY KEY AUTO_INCREMENT,
                         `played_at` datetime,
                         `tournament` varchar(255),
                         `player_1_id` integer,
                         `player_2_id` integer,
                         `score` varchar(255),
                         `winner_id` integer
);

CREATE TABLE `player` (
                          `id` integer PRIMARY KEY AUTO_INCREMENT,
                          `firstname` varchar(255),
                          `lastname` varchar(255),
                          `country` varchar(255),
                          `ranking` integer,
                          `photo_url` varchar(255)
);

ALTER TABLE encounter ADD FOREIGN KEY (`player_1_id`) REFERENCES `player` (`id`);

ALTER TABLE encounter ADD FOREIGN KEY (`player_2_id`) REFERENCES `player` (`id`);

ALTER TABLE encounter ADD FOREIGN KEY (`winner_id`) REFERENCES `player` (`id`);
