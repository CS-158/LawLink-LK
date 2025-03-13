import React, { useState } from 'react';
import { Upload, X } from 'lucide-react';

const ProfileSettings = ({ profilePicture, displayName, practiceAreas, onSave }) => {
  const [tempProfilePicture, setTempProfilePicture] = useState(profilePicture);
  const [tempDisplayName, setTempDisplayName] = useState(displayName);
  const [tempPracticeAreas, setTempPracticeAreas] = useState(practiceAreas);
  const [qualificationPhotos, setQualificationPhotos] = useState([]);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setTempProfilePicture(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemovePhoto = () => {
    setTempProfilePicture("https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png");
  };

  const handleQualificationPhotoUpload = (event) => {
    const files = event.target.files;
    if (files) {
      const newPhotos = Array.from(files).map(file => URL.createObjectURL(file));
      setQualificationPhotos([...qualificationPhotos, ...newPhotos]);
    }
  };

  const handleRemoveQualificationPhoto = (index) => {
    const updatedPhotos = qualificationPhotos.filter((_, i) => i !== index);
    setQualificationPhotos(updatedPhotos);
  };

  const handleSaveChanges = () => {
    onSave({
      profilePicture: tempProfilePicture,
      displayName: tempDisplayName,
      practiceAreas: tempPracticeAreas,
    });
  };


};

export default ProfileSettings;