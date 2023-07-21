function NoticesCategoryItem() {
  return (
    <div>
      <div>
        <img
          style={{
            width: 288,
            height: 288,
          }}
          src="
https://upload.wikimedia.org/wikipedia/commons/3/3a/Cat03.jpg"
          alt="cat"
        />
        <p>Add f</p>
        <p>In good hands</p>
        <p>Lviv</p>
        <p>1 year</p>
        <p>female</p>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 20,
          padding: "20px 24px",
        }}
      >
        <h2
          style={{
            margin: 0,
            padding: 0,

            fontFamily: "Manrope",
            fontSize: 24,
            fontStyle: "normal",
            fontWeight: 700,
            lineHeight: "normal",
          }}
        >
          Сute dog looking for a home
        </h2>
        <button
          style={{
            display: "flex",
            width: 248,
            padding: "8px 28px",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 40,
            border: "2px solid #54ADFF",
          }}
        >
          Learn more
        </button>
      </div>
    </div>
  );
}

export default NoticesCategoryItem;
