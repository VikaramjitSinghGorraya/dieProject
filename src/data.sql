INSERT INTO `DiceProject`.`User` (`userId`, `password`, `firstName`, `lastName`, `email`, `addedBy`) VALUES ('1', MD5('hello'), 'aa', 'aaa', 'aa@aaa.com', '1');
INSERT INTO `DiceProject`.`User` (`userId`, `password`, `firstName`, `lastName`, `email`, `addedBy`) VALUES ('2', MD5('hello'), 'bb', 'bbb', 'bb@bbb.com', '1');
INSERT INTO `DiceProject`.`User` (`userId`, `password`, `firstName`, `lastName`, `email`, `addedBy`) VALUES ('3', MD5('hello'), 'cc', 'ccc', 'cc@ccc.com', '1');

INSERT INTO `DiceProject`.`Role` (`roleId`, `roleName`) VALUES ('1', 'researcher');
INSERT INTO `DiceProject`.`Role` (`roleId`, `roleName`) VALUES ('2', 'technician');
INSERT INTO `DiceProject`.`Role` (`roleId`, `roleName`) VALUES ('3', 'student');
