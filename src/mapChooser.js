function mapChooser(locationName) {
    if (!locationName) {
        locationName = "none";
    }
    var imageName = locationName + ".png";
    return imageName;
}

export default mapChooser;