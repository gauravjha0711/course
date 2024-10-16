import React from 'react'
import { FcLike,FcLikePlaceholder } from 'react-icons/fc'
import { toast } from 'react-toastify';
export default function Card(props) {
  let course = props.course;
  let likedCourses = props.likedCourses;
  let setLikedCourses = props.setLikedCourses;
  function clickHandler(){
    if(likedCourses.includes(course.id)){
      setLikedCourses((prev)=>prev.filter((cid)=>(cid!==course.id)))
      toast.warning("Liked removed")
    }
    else{
      if(likedCourses.length===0){
        setLikedCourses([course.id]);
      }
      else{
        setLikedCourses((prev)=>[...prev,course.id]);
      }
      toast.success("Liked added");
    }
  }
  return (
    <div className='w-[300px] bg-gray-800 bg-opacity-80 rounded-md overflow-hidden mx-4 my-4'>
      <div className='relative'>
        <img src={course.image.url} />
        <div className='w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-[-14px] grid place-items-center'>
          <button onClick={clickHandler}>
            {
              likedCourses.includes(course.id) ? (<FcLike fontSize="1.75rem"/>):(<FcLikePlaceholder fontSize="1.75rem"/>)
            }
          </button>
        </div>
      </div>
      <div className='p-4'>
        <p className='text-white font-semibold text-lg leading-6'>{course.title}</p>
        <p className='mt-2 text-white '>
          {
            course.description.length>100 ? (course.description.substring(0,100)+"..."): (course.description)
          }
        </p>
      </div>
    </div>
  )
}
