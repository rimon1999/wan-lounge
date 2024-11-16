import React, { useState, FC, useEffect } from 'react';
import { ScrollView, View, Text, Image, TouchableOpacity, Dimensions, Modal, TouchableWithoutFeedback } from 'react-native';

interface DrinkItem {
  id: number;
  name: string;
  price: string;
  pictureUrl: any;
}

interface MenuSectionProps {
  title: string;
  sections: Record<string, { name: string; iconUrl: any; items: DrinkItem[] }>;
  initialSection: keyof MenuSectionProps['sections'];
}

const MenuSection: FC<MenuSectionProps> = ({ title, sections, initialSection }) => {
  const [selectedSection, setSelectedSection] = useState(initialSection);
  const [isImageModalVisible, setIsImageModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState<any>(null);

  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;
  const isTablet = screenWidth > 600; // Rough threshold for tablet devices
  const imageSize = (screenWidth - 36) / (isTablet ? 4 : 2); // 4 items per row on tablets, 2 items on phones

  const changeSection = (section: keyof typeof sections) => {
    setSelectedSection(section);
  };

  const openImageModal = (image: any) => {
    setSelectedImage(image);
    setIsImageModalVisible(true);
  };

  const closeImageModal = () => {
    setIsImageModalVisible(false);
    setSelectedImage(null);
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: 'black', padding: 12 }}>
      <View style={{ marginBottom: 12 }}>
        <Text style={{ fontSize: 22, color: '#FACE8D', fontFamily: 'Dancing Script', textAlign: 'center' }}>
          {title}
        </Text>
        <Text style={{ fontSize: isTablet ? 32 : 28, color: 'white', fontWeight: 'bold', textAlign: 'center' }}>
          Menu
        </Text>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginBottom: 12 }}>
        {Object.keys(sections).map((section) => (
          <TouchableOpacity
            key={section}
            onPress={() => changeSection(section)}
            style={{ paddingVertical: 6, paddingHorizontal: 14 }}
          >
            <View style={{ alignItems: 'center' }}>
              <Image source={sections[section].iconUrl} style={{ width: isTablet ? 100 : 80, height: isTablet ? 100 : 80, marginBottom: 5 }} />
              <Text
                style={{
                  color: selectedSection === section ? '#FACE8D' : 'white',
                  fontSize: isTablet ? 18 : 16,
                  textAlign: 'center',
                }}
              >
                {sections[section].name}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <Text style={{ color: '#FACE8D', fontSize: isTablet ? 26 : 22, marginBottom: 8 }}>
        {sections[selectedSection].name}
      </Text>

      <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
        {sections[selectedSection].items.map((item) => (
          <View
            key={item.id}
            style={{
              width: imageSize, // Dynamic image size based on screen width
              marginBottom: 16,
              padding: 10,
              backgroundColor: '#1f1f1f',
              borderRadius: 8,
            }}
          >
            <TouchableOpacity onPress={() => openImageModal(item.pictureUrl)}>
              <Image
                source={item.pictureUrl}
                style={{
                  width: '100%',
                  height: imageSize, // Ensures the height matches width for square images
                  borderRadius: 8,
                  marginBottom: 8,
                  resizeMode: 'cover',
                }}
              />
            </TouchableOpacity>
            <View>
              <Text style={{ fontSize: isTablet ? 20 : 18, fontWeight: '500', color: 'white', textAlign: 'center' }}>
                {item.name}
              </Text>
              <Text style={{ fontSize: isTablet ? 18 : 16, color: 'white', fontWeight: 'bold', marginTop: 2, textAlign: 'center' }}>
                {item.price}
              </Text>
            </View>
          </View>
        ))}
      </View>

      {/* Image Modal */}
      <Modal
        visible={isImageModalVisible}
        animationType="fade"
        transparent={true}
        onRequestClose={closeImageModal}
      >
        <TouchableWithoutFeedback onPress={closeImageModal}>
          <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
          }}>
            <Image
              source={selectedImage}
              style={{
                width: screenWidth * 0.8,
                height: screenWidth * 0.8,
                borderRadius: 16,
              }}
            />
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </ScrollView>
  );
};

export default MenuSection;
