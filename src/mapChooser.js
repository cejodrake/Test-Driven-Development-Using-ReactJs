function mapChooser(locationName) {
    if (!locationName) {
        locationName = "default";
    }
    var imageName = locationName + ".jpg";
    return imageName;
}

export default mapChooser;