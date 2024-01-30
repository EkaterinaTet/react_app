import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

//как было
// class ProfileStatus extends React.Component {
//   state = {
//     editMode: false,
//     status: this.props.status,
//   };
//   activateEditMode = () => {
//     this.setState({
//       editMode: true,
//     });
//   };
//   deactivateEditMode = () => {
//     this.setState({
//       editMode: false,
//     });
//     this.props.updateStatus(this.state.status);
//   };
//   onStatusChange = (e) => {
//     this.setState({
//       status: e.currentTarget.value,
//     });
//   };
//   componentDidUpdate(prevProps, prevState) {
//     if (prevProps.status !== this.props.status) {
//       this.setState({
//         status: this.props.status,
//       });
//     }
//   }
//   render() {
//     return (
//       <div>
//         {!this.state.editMode && (
//           <div>
//             <span onDoubleClick={this.activateEditMode}>
//               {this.props.status || "----"}
//             </span>
//           </div>
//         )}
//         {this.state.editMode && (
//           <div>
//             <input
//               onChange={this.onStatusChange}
//               autoFocus={true}
//               onBlur={this.deactivateEditMode}
//               type="text"
//               value={this.state.status}
//             />
//           </div>
//         )}
//       </div>
//     );
//   }
// }

//как стало:

const ProfileStatus = (props) => {
  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState(props.status);

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const activateEditMode = () => {
    setEditMode(true);
  };

  const deactivateEditMode = () => {
    setEditMode(false);
    props.updateStatus(status);
  };

  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        {!editMode && (
          <div>
            <span
              style={{ marginLeft: "5px", cursor: "pointer" }}
              onDoubleClick={activateEditMode}
            >
              {props.status || "----"}
            </span>
          </div>
        )}
        {editMode && (
          <div>
            <input
              {...register("status")}
              onChange={onStatusChange}
              autoFocus={true}
              onBlur={deactivateEditMode}
              type="text"
              value={status}
            />
          </div>
        )}
      </form>
    </div>
  );
};

export default ProfileStatus;
