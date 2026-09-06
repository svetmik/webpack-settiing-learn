import React from "react"

type OwnProps = {
    onSubmit?: React.SubmitEventHandler<HTMLFormElement>;
    children: React.ReactNode;
}

export const Form = ({onSubmit, children} : OwnProps ) => {
  return (
    <form onSubmit={onSubmit}>
        {children}
    </form>
  )
}
