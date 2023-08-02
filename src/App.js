import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FirstPage from './Pages/First_page/First_page';
import SecondPage from './Pages/Second_page/Second_page';
import LoginPage from './Pages/Fourth_page/Login_Page';
import ThirdPage from './Pages/Third_page/Third_page';
import ProfileDashBoardLayout from './Pages/Dashboard/Profile_Dashboard_Layout';
import Dashboard from './Outlet_Routes/Dashboard/Dashboard';
import TopperProfile from './Outlet_Routes/Topper_Profile/Topper_Profile';
import Videos from './Outlet_Routes/Guidance/Videos/Videos';
import Articles from './Outlet_Routes/Guidance/Articles/Articles';
import Poscasts from './Outlet_Routes/Guidance/Podcasts/Poscasts';
import SscCglTier1 from './Outlet_Routes/Schedule/SSC_CGL_Tier_1/SSC_CGL_Tier_1';
import SSCCGLTier2 from './Outlet_Routes/Schedule/SSC_CGL_Tier_2/SSC_CGL_Tier_2';
import SSCCHSLTier1 from './Outlet_Routes/Schedule/SSC _CHSL_Tier_1/SSC_CHSL_Tier_1';
import SSCCGLTier1Books from './Outlet_Routes/Books/SSC_CGL_Tier_1/SSC_CGL_Tier_1_Books';
import SSCCGLTier2Books from './Outlet_Routes/Books/SSC_CGL_Tier_2/SSC_CGL_Tier_2_Books';
import SSCCHSLTier1Books from './Outlet_Routes/Books/SSC _CHSL_Tier_1/SSC_CHSL_Tier_1_Books';
import SSCCHSLTier2Books from './Outlet_Routes/Books/SSC_CHSL_Tier_2/SSC_CHSL_Tier_2_Books';
import CoursesByMeFree from './Outlet_Routes/Courses/Courses_By_Me_Free/Courses_By_Me_Free';
import CoursesByMePaid from './Outlet_Routes/Courses/Courses_By_Me_Paid/Courses_By_Me_Paid';
import FreeStudyFromYoutube from './Outlet_Routes/Courses/Free_Study_From_Youtube/Free_Study_From_Youtube';
import PaidCoursesOfOthers from './Outlet_Routes/Courses/Paid_Courses_Of_Others/Paid_Courses_Of_Others';
import QuizCreatedByMeFree from './Outlet_Routes/Tests/Quiz_Created_By_Me_Free/Quiz_Created_By_Me_Free';
import TestsCreatedByMe from './Outlet_Routes/Tests/Tests_Created_By_Me/Tests_Created_By_Me';
import TestsSeriesRecommendation from './Outlet_Routes/Tests/Tests_Series_Recommendation/Tests_Series_Recommendation';
import TestsAnalysisGuidance from './Outlet_Routes/Tests/Tests_Analysis_Guidance/Tests_Analysis_Guidance';
import DigitalBooksPaid from './Outlet_Routes/Ebooks_Study_Material/Digital_Books_Paid/Digital_Books_Paid';
import MyNotesFree from './Outlet_Routes/Ebooks_Study_Material/My_Notes_Free/My_Notes_Free';
import MyNotesPaid from './Outlet_Routes/Ebooks_Study_Material/My_Notes_Paid/My_Notes_Paid';
import PYQPDFFree from './Outlet_Routes/Ebooks_Study_Material/PYQ_PDF_Free/PYQ_PDF_Free';
import Blog from './Outlet_Routes/Blog/Blog';
import LiveChat from './Outlet_Routes/Live_Chat/Live_Chat';
import MyGiveAwayEvents from './Outlet_Routes/Events/My_Give_Away_Events/My_Give_Away_Events';
import MyMeetUps from './Outlet_Routes/Events/My_Meet_Ups/My_Meet_Ups';
import MyYoutubeEvents from './Outlet_Routes/Events/My_Youtube_Events/My_Youtube_Events';
import AskMe from './Outlet_Routes/Ask_Me/Ask_Me';
import FAQOnBooks from './Outlet_Routes/FAQ/FAQ_On_Books/FAQ_On_Books';
import FAQOnMockTests from './Outlet_Routes/FAQ/FAQ_On_Mock_Tests/FAQ_On_Mock_Tests';
import FAQOnPostPreference from './Outlet_Routes/FAQ/FAQ_On_Post_Preference/FAQ_On_Post_Preference';
import Vacancies from './Outlet_Routes/News_Update/Vacancies/Vacancies';
import Notification from './Outlet_Routes/News_Update/Notification/Notification';
import ExamAnalysisByMe from './Outlet_Routes/Analysis/Exam_Analysis_By_Me/Exam_Analysis_By_Me';
import ExamAnalysisByPinnacle from './Outlet_Routes/Analysis/Exam_Analysis_By_Pinnacle/Exam_Analysis_By_Pinnacle';
import FollowMe from './Outlet_Routes/Follow_Me/Follow_Me';


function App() {
  return (

    <BrowserRouter>

      <Routes>
        <Route path='/' element={<FirstPage />} />
        <Route path='/ssc' element={<SecondPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/profile' element={<ThirdPage />} />
        <Route path='/logged_in_profile_dashboard' element={<ProfileDashBoardLayout />}>
          <Route path='/logged_in_profile_dashboard/Dashboard' element={<Dashboard />} />
          <Route path='/logged_in_profile_dashboard/Profile' element={<TopperProfile />} />
          <Route path='/logged_in_profile_dashboard/Videos' element={<Videos />} />
          <Route path='/logged_in_profile_dashboard/Articles' element={<Articles />} />
          <Route path='/logged_in_profile_dashboard/Podcasts' element={<Poscasts />} />
          <Route path='/logged_in_profile_dashboard/ssc_cgl_tier_1' element={<SscCglTier1 />} />
          <Route path='/logged_in_profile_dashboard/ssc_cgl_tier_2' element={<SSCCGLTier2 />} />
          <Route path='/logged_in_profile_dashboard/ssc_chsl_tier_1' element={<SSCCHSLTier1 />} />
          <Route path='/logged_in_profile_dashboard/ssc_chsl_tier_2' element={<SSCCGLTier2 />} />
          <Route path='/logged_in_profile_dashboard/ssc_cgl_tier_1_books' element={<SSCCGLTier1Books />} />
          <Route path='/logged_in_profile_dashboard/ssc_cgl_tier_2_books' element={<SSCCGLTier2Books />} />
          <Route path='/logged_in_profile_dashboard/ssc_chsl_tier_1_books' element={<SSCCHSLTier1Books />} />
          <Route path='/logged_in_profile_dashboard/ssc_chsl_tier_2_books' element={<SSCCHSLTier2Books />} />
          <Route path='/logged_in_profile_dashboard/courses_by_me_free' element={<CoursesByMeFree />} />
          <Route path='/logged_in_profile_dashboard/Courses_by_me_paid' element={<CoursesByMePaid />} />
          <Route path='/logged_in_profile_dashboard/free_study_from_youtube' element={<FreeStudyFromYoutube />} />
          <Route path='/logged_in_profile_dashboard/paid_courses_of_others' element={<PaidCoursesOfOthers />} />
          <Route path='/logged_in_profile_dashboard/quiz_by_me' element={<QuizCreatedByMeFree />} />
          <Route path='/logged_in_profile_dashboard/tests_by_me' element={<TestsCreatedByMe />} />
          <Route path='/logged_in_profile_dashboard/test_series_recommen' element={<TestsSeriesRecommendation />} />
          <Route path='/logged_in_profile_dashboard/test_analysis' element={<TestsAnalysisGuidance />} />
          <Route path='/logged_in_profile_dashboard/digital_books' element={<DigitalBooksPaid />} />
          <Route path='/logged_in_profile_dashboard/my_notes_free' element={<MyNotesFree />} />
          <Route path='/logged_in_profile_dashboard/my_notes_paid' element={<MyNotesPaid />} />
          <Route path='/logged_in_profile_dashboard/pyq_pdf' element={<PYQPDFFree />} />
          <Route path='/logged_in_profile_dashboard/blog' element={<Blog />} />
          <Route path='/logged_in_profile_dashboard/live_chat' element={<LiveChat />} />
          <Route path='/logged_in_profile_dashboard/my_give_away_events' element={<MyGiveAwayEvents />} />
          <Route path='/logged_in_profile_dashboard/my_meetups' element={<MyMeetUps />} />
          <Route path='/logged_in_profile_dashboard/my_youtube_events' element={<MyYoutubeEvents />} />
          <Route path='/logged_in_profile_dashboard/ask_me' element={<AskMe />} />
          <Route path='/logged_in_profile_dashboard/faq_on_books' element={<FAQOnBooks />} />
          <Route path='/logged_in_profile_dashboard/faq_on_mock_tests' element={<FAQOnMockTests />} />
          <Route path='/logged_in_profile_dashboard/faq_on_post_preference' element={<FAQOnPostPreference />} />
          <Route path='/logged_in_profile_dashboard/vacancies' element={<Vacancies />} />
          <Route path='/logged_in_profile_dashboard/notifications' element={<Notification />} />
          <Route path='/logged_in_profile_dashboard/exam_analysis_by_me' element={<ExamAnalysisByMe />} />
          <Route path='/logged_in_profile_dashboard/exam_analysis_by_pinnacle' element={<ExamAnalysisByPinnacle />} />
          <Route path='/logged_in_profile_dashboard/follow_me' element={<FollowMe />} />


        </Route>
      </Routes>







    </BrowserRouter>
  );
}

export default App;
