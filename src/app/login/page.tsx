'use client'

import { redirect } from 'next/navigation'

export default function Login() {
  if (process.env.TUTI_HARKAYSOFT_LINK) {
    return redirect(process.env.TUTI_HARKAYSOFT_LINK + '/login')
  } else {
    redirect('/')
  }
}
