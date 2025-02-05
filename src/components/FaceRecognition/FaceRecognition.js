import './FaceRecognition.css';

const FaceRecognition = ({ URL, box }) => {
    return (
        <div className="center">
            <div className="mt2">
                <img id="inputImage" alt="face" src={URL} width="500px" />
                {box.map((singleBox, index) => (
                    <div
                        key={index}
                        className="bounding-box"
                        style={{
                            top: singleBox.topRowpx,
                            right: singleBox.rightColpx,
                            bottom: singleBox.bottomRowpx,
                            left: singleBox.leftColpx,
                        }}
                    ></div>
                ))}
            </div>
        </div>
    );
};

export default FaceRecognition;
