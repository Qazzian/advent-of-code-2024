describe('Day 4', () => {
	describe('simple examples', () => {
		it('should find XMAS left to right', () => {
			expect(find('XMAS')).toBe(1);
			expect(find('qXMAS')).toBe(1);
			expect(find('XMASq')).toBe(1);
		});

		it('should find XMAS right to left', () => {
			expect(find('SAMX')).toBe(1);
		});

		it('should find XMAS top to bottom', () => {
			
		});

		it('should find XMAS bottom to top', () => {
			
		});

		it('should find XMAS diagonal top-left to bottom-right', () => {
			
		});

		it('should find diagonal top-right to bottom left', () => {
			
		});

		it('should find diagonal bottom-left to top-right', () => {
			
		});

		it('should find diagonal bottom-right to top-left', () => {
			
		});
	});
});