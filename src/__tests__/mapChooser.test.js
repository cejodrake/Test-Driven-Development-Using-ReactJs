import mapChooser from '../mapChooser';

describe("mapChooser", function () {
    it('return a image based on input given to it', function () {
        let expected = "portland.jpg";
        let actual = mapChooser("portland");
        expect(actual).toEqual(expected);
    });


    it('return a default image when no  input given to it', function () {
        let expected = "default.jpg";
        let actual = mapChooser("");
        expect(actual).toEqual(expected);
    });


});