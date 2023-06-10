/**session으로 profile의 string을 받을것 */
// const maria = require("../database/connect/maria");
// const mybatisMapper = require("mybatis-mapper");

// MariaDB 연결
// maria.connect();

// MyBatis 매퍼 생성 및 XML 파일 로드
// mybatisMapper.createMapper(["./src/database/mapper/calendar.xml"]);

const getFamilycare = (req, res) => {
  // const user = "sanghee"; //session 값 받아서 수정하기

  // //SQL 파라미터
  // const parameter = {
  //   name: user, //공통 or 개인 => session user를 받아서 처리하기
  // };

  // //SQL문 가져오기
  // const format = { language: "sql", indent: "  " };
  // const query = mybatisMapper.getStatement(
  //   "CalendarMapper",
  //   "selectEventsByType",
  //   parameter,
  //   format
  // );

  // //실행
  // maria.query(query, function (err, results, fields) {
  //   if (err) {
  //     console.error("An error occurred while executing the query:", err);
  //   }

    // 결과 출력
    // console.log(results);
    // console.log(fields);

    // EJS 파일 렌더링 및 결과 전달
    return res.render("family/family", { results: results });
  // });
};
module.exports.getFamilycare = getFamilycare;

const addFamilycare = (req, res) => {
  // const eventData = req.body; // 전송된 데이터는 req.body에 있습니다.

  // const user = "sanghee"; //session 값 받아서 수정하기

  // if (eventData.type != "common") {
  //   eventData.type = user;
  // }

  // const parameter = {
  //   start: eventData.start, //시작 시간
  //   end: eventData.end, //종료 시간
  //   title: eventData.title, //제목
  //   type: eventData.type, //공통 or 개인 => session user를 받아서 처리하기
  //   contents: eventData.contents, //세부 내용
  //   allDay: eventData.allDay ? 1 : 0, //allDay true or false
  // };

  // var format = { language: "sql", indent: " " };
  // var query = mybatisMapper.getStatement(
  //   "CalendarMapper",
  //   "insertCalendar",
  //   parameter,
  //   format
  // );

  // // 쿼리 실행
  // maria.query(query, function (err, results, fields) {
  //   if (err) {
  //     console.error("이벤트 데이터 삽입 중 오류 발생:", err);
  //     res.status(500).json({
  //       error: "데이터베이스에 이벤트 데이터를 삽입하는 데 실패했습니다.",
  //     });
  //   } else {
  //     console.log("이벤트 데이터가 성공적으로 삽입되었습니다.");
  //     res
  //       .status(200)
  //       .json({ message: "이벤트 데이터가 성공적으로 삽입되었습니다." });
  //   }
  // });
};
module.exports.addFamilycare = addFamilycare;

const deleteFamilycare = (req, res) => {
  // const eventId = req.body.id;

  // console.log(eventId);

  // SQL 파라미터
  // const parameter = {
  //   id: eventId,
  // };

  // SQL문 가져오기
  // const format = { language: "sql", indent: "  " };
  // const query = mybatisMapper.getStatement(
  //   "CalendarMapper",
  //   "deleteCalendar",
  //   parameter,
  //   format
  // );

  // 실행
  // maria.query(query, function (err, results, fields) {
  //   if (err) {
  //     console.error("An error occurred while executing the query:", err);
  //     res.status(500).json({
  //       error: "데이터베이스에서 이벤트를 삭제하는 데 실패했습니다.",
  //     });
  //   } else {
  //     console.log("이벤트가 성공적으로 삭제되었습니다.");
  //     res.status(200).json({ message: "이벤트가 성공적으로 삭제되었습니다." });
  //   }
  // });
};
module.exports.deleteFamilycare = deleteFamilycare;

const updateFamilycare = (req, res) => {
  // const user = "sanghee"; //session 값 받아서 수정하기
  // const updateID = req.body.id;
  // const updateContents = req.body.contents;
  // var updateType = req.body.type;
  // if (updateType !== "common") {
  //   updateType = user;
  // }

  // console.log(updateID);
  // console.log(updateContents);
  // console.log(updateType);

  // // SQL 파라미터
  // const parameter = {
  //   id: updateID,
  //   eventContents: updateContents,
  //   type: updateType,
  // };

  // // SQL문 가져오기
  // const format = { language: "sql", indent: "  " };
  // const query = mybatisMapper.getStatement(
  //   "CalendarMapper",
  //   "updateCalendar",
  //   parameter,
  //   format
  // );

  // // 실행
  // maria.query(query, function (err, results, fields) {
  //   if (err) {
  //     console.error("An error occurred while executing the query:", err);
  //     res.status(500).json({
  //       error: "데이터베이스에서 이벤트를 업데이트하는 데 실패했습니다.",
  //     });
  //   } else {
  //     console.log("이벤트가 성공적으로 업데이트되었습니다.");
  //     res
  //       .status(200)
  //       .json({ message: "이벤트가 성공적으로 업데이트되었습니다." });
  //   }
  // });
};
module.exports.updateFamilycare = updateFamilycare;

import User from "../models/User";
const url = "180.227.195.105:8080";
export const getNewFamily = (req, res) => {
  const {
    session: {
      user: { name },
    },
  } = req;
  return res.render("family/newFamily",{ name ,url });
};

export const postNew = async (req, res) => {
  const {
    session: { user: _id },
  } = req;
  await User.findByIdAndUpdate(
    _id,
    {
      familyPath: User.generateRandomString(),
    },
    { new: true }
  );

  const user = await User.findOne({ _id });
  req.session.familyIn = true;
  req.session.user = user;
  return res.redirect("/family");
};

export const postEnter = async (req, res) => {
  const { familyPath } = req.body;
  const {
    session: { user: _id },
  } = req;
  await User.findByIdAndUpdate(
    _id,
    {
      familyPath: User.generateRandomString(),
    },
    { new: true }
  );
  return res.redirect("/family");
};
