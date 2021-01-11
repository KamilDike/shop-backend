select * from orders
select * from orderitems
select * from users
select * from productscategories;
select * from products;

delete from orderitems where id != 0
delete from orders where id != 0
delete from users where username != 'James'
delete from products where id != 118

ALTER TABLE users 
ADD CONSTRAINT unique_phone UNIQUE ( phone );
	
insert into products (name, description, price, weight, img, quantity, category)
values ('Nike Air Force 1', 
		'The radiance lives on in the Nike Air Force 1 ’07, the b-ball OG that puts a fresh spin on what you know best: durably stitched overlays, clean finishes and the perfect amount of flash to make you shine.', 
		90, 320, 
		'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/4f37fca8-6bce-43e7-ad07-f57ae3c13142/air-force-1-07-mens-shoe-5QFp5Z.jpg', 
		10, 4);
		
insert into products (name, description, price, weight, img, quantity, category)
values ('Nike Blazer Mid `77 Suede', 
		'The Nike Blazer Mid `77 Vintage Suede harnesses the old-school look of Nike b-ball with a vintage midsole finish, making it look like you`ve been saving them for years. Its luscious suede, retro Swoosh and padded collar make it a modern staple while the ultra-clean colors add a crisp look that completes any outfit.', 
		100, 320, 
		'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/1da09eeb-116c-4cc1-9635-8499353e4405/blazer-mid-77-suede-shoe-HxFGDP.jpg', 
		5, 4);
		
insert into products (name, description, price, weight, img, quantity, category)
values ('Nike Air Max 270', 
		'Boasting the first-ever Max Air unit created specifically for Nike Sportswear, the Nike Air Max 270 Men`s Shoe delivers visible air under every step. Updated for modern comfort, it nods to the original 1991 Air Max 180 with its exaggerated tongue top and heritage tongue logo.', 
		150, 300, 
		'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/olo60amig1cvddvrwciq/air-max-270-mens-shoe-Z0k0Fs.jpg', 
		8, 4);
		
insert into products (name, description, price, weight, img, quantity, category)
values ('Nike Air Force 1 GTX Boot', 
		'With crisp overlays, bold accents and the perfect amount of flash to let you shine, the Nike Air Force 1 GTX Boot brings OG hoops style into winter. The GORE-TEX lining, large lugs on the outsole and removable silicone ankle strap toughen up the icon while the padded, high-cut collar keeps the heritage b-ball comfort.', 
		180, 380, 
		'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/2456ce8d-7223-4e0a-83f6-c5559a228f0c/air-force-1-gtx-boot-boot-vtm6QP.jpg', 
		3, 4);
		
insert into products (name, description, price, weight, img, quantity, category)
values ('Nike Air VaporMax Flyknit 3', 
		'Be bouncy and buoyant in the Nike Air VaporMax Flyknit 3. The upper features flowing, 2-tone lines of breathable, stretchable Flyknit construction for unique, street-ready style. Revolutionary VaporMax technology keeps spring in your step with toe-to-heel cushioning.', 
		200, 280, 
		'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/v21gqhkcenhwwcnefv9m/air-vapormax-flyknit-3-mens-shoe-JsWsB7.jpg', 
		1, 4);
		
insert into products (name, description, price, weight, img, quantity, category)
values ('Air Jordan 1 Mid SE', 
		'The Air Jordan 1 Mid SE maintains the timeless appeal of the OG AJ1. This version gets revamped with gold detailing and premium materials. It`s built with a lightweight Air-Sole unit and classic design lines, capturing the essence of the original through a modern lens.', 
		125, 300, 
		'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/be99ca97-2b9a-4764-b584-264dc0bbb171/air-jordan-1-mid-se-mens-shoe-GR4N79.jpg', 
		7, 4);
		
insert into products (name, description, price, weight, img, quantity, category)
values ('LA Clippers City Edition', 
		'L.A. is more than movie stars and mansions in the hills. Peel back the glossy, glamorous layers, and you’ll find a gritty, homegrown culture that pulses with vitality. The 2020-21 Nike NBA LA Clippers City Edition Swingman Jersey celebrates the grassroots of Los Angeles, where Clipper pride is strongest. It’s got a black base with white and red accents and a tattoo-inspired “Los Angeles” emblem.', 
		110, 300, 
		'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/a6df3bce-8af1-4683-95e2-e6d1c12cb088/la-clippers-city-edition-nba-swingman-jersey-n6gbtD.jpg', 
		7, 5);
		
insert into products (name, description, price, weight, img, quantity, category)
values ('Miami Heat City Edition', 
		'The 2020-21 Nike NBA Miami Heat City Edition Swingman Jersey sports a tribute to the uniform’s past, presented through the lens of the city’s future. Taking cues from its colorful predecessors, the latest version features a horizontal gradient that melds the team’s signature laser fuchsia with blue gale to welcome violet into the Heat color palette, resulting in a distinctive, double-sided design—two uniforms in one depending on your point of view.', 
		110, 300, 
		'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/7e503633-74c9-436f-984e-e0c200d3a1e0/miami-heat-city-edition-nba-swingman-jersey-z0rpV2.jpg', 
		7, 5);
		
insert into products (name, description, price, weight, img, quantity, category)
values ('Atlanta Hawks City Edition', 
		'Born and raised in Atlanta, Martin Luther King Jr. aspired to a world where the character of people mattered, not the color of their skin. The 2020-21 Nike NBA Atlanta Hawks City Edition Swingman Jersey is dedicated to his legacy. The black jersey is trimmed in gold and white and prominently features “MLK” in powerful lettering—a bold symbol of his dream and a call to all who would carry it forward.', 
		110, 300, 
		'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/66f1f921-7a2a-411e-861a-f311977e02a6/atlanta-hawks-city-edition-nba-swingman-jersey-mkrQN7.jpg', 
		7, 5);
		
insert into products (name, description, price, weight, img, quantity, category)
values ('Los Angeles Lakers City Edition', 
		'One of the first to play above the rim, Laker legend Elgin Baylor helped revitalize L.A. sports culture in the 1960s. Known as the ultimate showman, he set the tone for what would become Showtime. Continuing with the team’s Lore Series, the 2020-21 Nike NBA Los Angeles Lakers City Edition Swingman Jersey has a white base with cool blue lettering and accents that reference the team’s Minneapolis era.', 
		110, 300, 
		'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/026e4081-78ca-416c-ae72-cb0ea5050596/los-angeles-lakers-city-edition-nba-swingman-jersey-HtmkMt.jpg', 
		7, 5);
		
insert into products (name, description, price, weight, img, quantity, category)
values ('Portland Trail Blazers City Edition', 
		'Rip City is where the Portland Trail Blazers play, but it’s the entire state of Oregon that the team calls home. The Blazers’ 2020-21 Nike NBA City Edition Swingman Jersey features diverse design details that speak to Oregon’s history, its tribal nations, and the majestic mountains, rivers and forests that define the state’s landscape.', 
		110, 300, 
		'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/3e6ddc3c-db27-4495-a148-4ad8244cd19d/portland-trail-blazers-city-edition-nba-swingman-jersey-3shf0z.jpg', 
		7, 5);	
		
insert into products (name, description, price, weight, img, quantity, category)
values ('Kyrie Irving Nets Statement Edition 2020', 
		'Bold alternate colors and details distinguish the Statement Edition, a jersey that symbolizes the collective strength, spirit and competitive mindset of the roster. The Jordan NBA Statement Edition Swingman Jersey of the Brooklyn Nets is inspired by what the pros wear.', 
		110, 300, 
		'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/e95b758e-d1ec-431f-9535-14f16ac839fc/kyrie-irving-nets-statement-edition-2020-jordan-nba-swingman-jersey-qD3D8V.jpg', 
		7, 5);	
		