import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getProfile,
  profileSelector,
  putProfile,
} from "../../features/profileSlice";

import ProfileImage from "../../assets/image/profile-image.png";

import ImageEdit from "../../assets/image/edit-button.png";

const Profile = () => {
  const dispatch = useDispatch();
  const [photo, setPhoto] = useState(null);
  const handlePhotoChange = (event) => {
    setPhoto(event.target.files[0]);
  };
  const profile = useSelector(profileSelector.selectAll);

  const handlePhotoUpload = (e) => {
    e.preventDefault();
    const formData = new FormData();

    if (photo) {
      formData.append("name", profile[2]);
      formData.append("photo", photo);
      formData.append("address", profile[4]);
      dispatch(putProfile(formData));
    }
  };

  useEffect(() => {
    dispatch(getProfile());
  }, [dispatch]);
  console.log("profile", profile);
  return (
    <div className="container mt-3 ">
      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="col-md-4 mt-3">
              <div className="card">
                <div className="card-body">
                  <img
                    src={
                      profile[3] === "" || profile[3] === undefined
                        ? ProfileImage
                        : profile[3]
                    }
                    className="img-thumbnail"
                    alt="profile"
                    width={450}
                    height={450}
                  />

                  <form onSubmit={handlePhotoUpload} className="d-grid gap-2">
                    <input
                      className="mt-3"
                      type="file"
                      onChange={handlePhotoChange}
                    />
                    <button
                      className="btn btn-outline-primary mt-3"
                      type="submit"
                    >
                      Simpan
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-md-8 mt-3">
              <div className="card">
                <div className="card-body">
                  <h3>Biodata Diri</h3>
                  <div className="row">
                    <div className="col-4">
                      <p>Name :</p> <p>Alamat : </p> <p>Tanggal Lahir : </p>
                      <p>Jenis Kelamin : </p> <p>Email : </p> <p>Nomor Hp : </p>
                    </div>
                    <div className="col-8">
                      <p>
                        {profile[2]} <img src={ImageEdit} alt="" />
                      </p>
                      <p> {profile[4]}</p>
                      <p>.. </p>
                      <p>.. </p>
                      <p> {profile[1]}</p>
                      <p>..</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
