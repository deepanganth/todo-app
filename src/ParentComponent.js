import User from "./ChildComponent";
import './styles.css';
import avatar from './assets/avatar.png';

function ParentComponent() {
  const users = [
    {
      name : 'deepan ganth',
      email : 'deepanganth@gmail.com',
      avatar : avatar
    },
    {
      name : 'prem kumar',
      email : 'kumarsperm@gmail.com',
      avatar : avatar
    },
    {
      name : 'james titus',
      email : 'jamestitus@gmail.com',
      avatar : avatar
    }
  ]
  return (
    <div className="main-box">
      {users.map(function (user,index){
        return <User key={index} name={user.name} email={user.email} avatar={user.avatar}/>
      })}
    </div>
  );
}

export default ParentComponent;
