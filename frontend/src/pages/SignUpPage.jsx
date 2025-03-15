import React, { useState } from 'react'

const SignUpPage = () => {
  const [showPassword, setShowPasword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  return  <div>SignUpPage</div>
  
}

export default SignUpPage