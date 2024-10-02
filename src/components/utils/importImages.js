function importAll(r) {
    let images = {};
    r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}

export const boutiqueImages = importAll(require.context('../images/Boutique', false, /\.(png|jpe?g|svg)$/));
export const cropAIImages = importAll(require.context('../images/CropAI', false, /\.(png|jpe?g|svg)$/));
export const travelExploreImages = importAll(require.context('../images/TourandTravels', false, /\.(png|jpe?g|svg)$/));