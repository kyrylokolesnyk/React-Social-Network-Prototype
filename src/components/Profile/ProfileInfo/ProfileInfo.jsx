import React from "react";
import styles from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div className={styles.profileBannerContainer}>
                <img src='https://images.pexels.com/photos/139229/pexels-photo-139229.jpeg' alt='profile-banner'/>
            </div>
            <div className={styles.profileContainer}>
                <div className={styles.profilePicContainer}>
                    <img
                        src='https://images.pexels.com/photos/3498989/pexels-photo-3498989.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
                        alt='profile-picture'/>
                </div>
                <div className={styles.profileInfoContainer}>
                    <div>
                        Name
                        <br/>
                        <br/>
                    </div>
                    <div>
                        Date of Birth:
                    </div>
                    <div>
                        City:
                    </div>
                    <div>
                        Education:
                    </div>
                    <div>
                        Website:
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileInfo;