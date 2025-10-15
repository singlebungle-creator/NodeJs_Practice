			var Body = {
				setColor: (color)=> {
					$('body').css('color', color);
				},
				setBackgroundColor:(color) =>{
					$('body').css('backgroundColor',color);
				}
			}
			var a = {
				setColor:(color) =>{
				$('a').css('color', color);
				}
			}

			var nightDayHandler=self=> {
								   if (self.value==='night') {
									Body.setColor('white');
									Body.setBackgroundColor('black');
									a.setColor('powderblue');
								   	self.value='day';
								   } else {
									   Body.setColor('black');
									   Body.setBackgroundColor('white');
									a.setColor('blue');
								   	self.value='night';
								   }
			}
