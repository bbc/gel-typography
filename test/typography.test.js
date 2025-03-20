describe('GEL Typography', () => {
  it('with large fonts', async () => {
    const css = await global.compileCSS('test/data/with-large-fonts.scss');

    expect(css).toMatchSnapshot();
  });

  it('without large fonts', async () => {
    const css = await global.compileCSS('test/data/without-large-fonts.scss');

    expect(css).toMatchSnapshot();
  });

  describe('type sizes', () => {
    it('Canon', async () => {
      const css = await global.compileCSS('test/data/type-sizes/canon.scss');

      expect(css).toMatchSnapshot();
    });

    it('Trafalgar', async () => {
      const css = await global.compileCSS('test/data/type-sizes/trafalgar.scss');

      expect(css).toMatchSnapshot();
    });

    it('Paragon', async () => {
      const css = await global.compileCSS('test/data/type-sizes/paragon.scss');

      expect(css).toMatchSnapshot();
    });

    it('Double Pica', async () => {
      const css = await global.compileCSS('test/data/type-sizes/double-pica.scss');

      expect(css).toMatchSnapshot();
    });

    it('Great Primer', async () => {
      const css = await global.compileCSS('test/data/type-sizes/great-primer.scss');

      expect(css).toMatchSnapshot();
    });

    it('Body Copy', async () => {
      const css = await global.compileCSS('test/data/type-sizes/body-copy.scss');

      expect(css).toMatchSnapshot();
    });

    it('Pica', async () => {
      const css = await global.compileCSS('test/data/type-sizes/pica.scss');

      expect(css).toMatchSnapshot();
    });

    it('Long Primer', async () => {
      const css = await global.compileCSS('test/data/type-sizes/long-primer.scss');

      expect(css).toMatchSnapshot();
    });

    it('Brevier', async () => {
      const css = await global.compileCSS('test/data/type-sizes/brevier.scss');

      expect(css).toMatchSnapshot();
    });

    it('Minion', async () => {
      const css = await global.compileCSS('test/data/type-sizes/minion.scss');

      expect(css).toMatchSnapshot();
    });
  });

  describe('larger type sizes', () => {
    it('Atlas', async () => {
      const css = await global.compileCSS('test/data/large-type-sizes/atlas.scss');

      expect(css).toMatchSnapshot();
    });

    it('Elephant', async () => {
      const css = await global.compileCSS('test/data/large-type-sizes/elephant.scss');

      expect(css).toMatchSnapshot();
    });

    it('Imperial', async () => {
      const css = await global.compileCSS('test/data/large-type-sizes/imperial.scss');

      expect(css).toMatchSnapshot();
    });

    it('Royal', async () => {
      const css = await global.compileCSS('test/data/large-type-sizes/royal.scss');

      expect(css).toMatchSnapshot();
    });

    it('Foolscap', async () => {
      const css = await global.compileCSS('test/data/large-type-sizes/foolscap.scss');

      expect(css).toMatchSnapshot();
    });
  });
});
