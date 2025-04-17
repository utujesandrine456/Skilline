import React from 'react'


const Section5 = ({image, tag, title, description}) => {
  return (
    <>
        <div style={styles.cardContainer}>
            <div style={styles.imageContainer}>
                <img src={image} alt="news" style={styles.image} />
                <span style={styles.tag}>{tag}</span>
            </div>
            <div>
                <h3 style={styles.title}>{title}</h3>
                <p style={styles.description}>{description}</p>
            </div>
        </div>
    </>
    );
};

const styles = {
    cardContainer: {
        display: "flex",
        alignItems: "center",
        gap:"50px",
        marginBottom: "20px",
    },

    imageContainer: {
        position: "relative", 
        width: "120px",
        height: "80px",
    },
    image: {
        width: "140px",
        height: "100px",
        objectFit: "cover",
        borderRadius: "10px",
    },
    content:{
        display: "flex",
    },
    tag: {
        position: "absolute",
        bottom: "-10px",
        left: "30px",
        background: "#F4C467",
        color: "#252641",
        borderRadius: "15px",
        fontSize: "10px",
        padding: "2px 8px",
        textAlign: "center",
    },
    title: {
        fontSize: "14px",
        fontWeight: "600",
        margin: "5px 0",
        color: "#252641",
    },
    description: {
        display: "inline",
        fontSize: "14px",
        color: "#666",
        position: "relative",
    },
};

export default Section5;