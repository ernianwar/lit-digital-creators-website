"use client"

import { useState, useEffect, useCallback } from "react"
import ResourcePopup from "@/components/ResourcePopup"

export default function PopupProvider() {
  const [showPopup, setShowPopup] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setShowPopup(true), 20000)
    return () => clearTimeout(timer)
  }, [])

  const handleClose = useCallback(() => {
    setShowPopup(false)
    setTimeout(() => setShowPopup(true), 30000)
  }, [])

  return <ResourcePopup isOpen={showPopup} onClose={handleClose} />
}
