import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Sidebar1 from "../Sidebar/Sidebar1";
import { getCourse } from "../../api/coursesApi";
import YouTube from "react-youtube";

export default function CourseDetails() {
  const { courseId } = useParams();
  const [course, setCourse] = useState(null);
  const [player, setPlayer] = useState(null);

  useEffect(() => {
    const promise = getCourse(courseId);
    promise.then((response) => {
      const course = response.data;
      setCourse(course);
      console.log(course);
    });
  }, []);

  const opts = {
    // height: '390',
    // width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      //autoplay: 1,
    },
  };

  const onYouTubeplayerReady = (event) => {
    const player = event.target;
    setPlayer(player);
  };

  const playVideo = (videoId) => {
    console.log(videoId);
    player.loadVideoById(videoId);
  };

  return (
    <div>
      <Sidebar1 />

      <div className="p-2">
        {course && (
          <div>
            <div>
              <h1>Welcome to {course.name}</h1>
            </div>
            <div>
              <h2>Course Description : </h2>
              <br />
              <p>{course.description}</p>
            </div>

            <br />
            <div>
              <h2>Videos :</h2>
              <div className="d-flex">
                <div>
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      {course.videos?.map((video, index) => {
                        return (
                          <tr key={index}>
                            <td>
                              <button
                                type="button"
                                className="btn btn-link"
                                onClick={() => playVideo(video.videoId)}
                              >
                                {video.title}
                              </button>
                            </td>
                            <td>{video.description}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
                <div className="ms-auto">
                  <YouTube opts={opts} onReady={onYouTubeplayerReady} />
                </div>
              </div>
            </div>
            <br />

            <div>
              <h2> Articles :</h2>
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  {course.articles?.map((article, index) => {
                    return (
                      <tr key={index}>
                        <td>
                          <a target="_blank" href={article.link}>
                            {article.title}
                          </a>
                        </td>
                        <td>{article.description}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <br />
            <div>
              {" "}
              <h2>Documents :</h2>{" "}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
