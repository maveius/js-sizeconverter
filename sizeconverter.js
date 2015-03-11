function SizeConverter () {

    this.kibiMultiplier = 1024;
    this.sizes = ['B', 'kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

    this.convert = function (value, sourceUnit, destinationUnit) {

        if (sourceUnit === undefined &&
            destinationUnit === undefined ||
            sourceUnit == destinationUnit) {

            return value;
        }

        var sourceIndex = ( this.sizes.indexOf(sourceUnit) );
        var destinationIndex = ( this.sizes.indexOf(destinationUnit) );

        var result = value;
        var exponent = 0;
        if ( sourceIndex > destinationIndex ) {

            exponent = sourceIndex - destinationIndex;
            result = value * Math.pow(this.kibiMultiplier, exponent);
            return parseFloat(result);

        } else if ( sourceIndex < destinationIndex ) {

            exponent = destinationIndex - sourceIndex;
            result = value / Math.pow(this.kibiMultiplier, exponent);
            return parseFloat(result);

        } else {

            return result;
        }
    };
}
