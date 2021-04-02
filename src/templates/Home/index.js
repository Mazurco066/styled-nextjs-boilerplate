// Dependencies
import { useState } from 'react'
import { FaUser, FaKey, FaEye, FaEyeSlash } from 'react-icons/fa'
import { useFormik } from 'formik'

// Dynamic components
import { Button, Input } from 'components'

// Styles
import { Container, Row, Column } from 'styles/global'
import * as S from './styles'

// Component
export default function HomeTemplate() {

  // Hooks
  const [revealPassword, setRevealPassword] = useState(false)
  const formik = useFormik({
    initialValues: { username: '', password: '' },
    onSubmit: (values, { setSubmitting }) => {
      console.log('[SUBMIT] Values:', values)
      setSubmitting(true)
      setSubmitting(false)
    },
  })

  // Jsx
  return (
    <Container style={{ minHeight: '100%', height: '100%' }}>
      <form onSubmit={formik.handleSubmit} style={{ height: '100%' }}>
        <Row style={{ height: '100%', alignItems: 'center' }}>
          <Column lg={6} md={6} sm={12} style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'center'
          }}>
            <S.Title>Styled Nextjs boilerplate</S.Title>
            <S.Description>Featuring Styled Components, Custom Made Inputs, Formik, Security Headers and PWA Support.</S.Description>
            <S.Hero src="/img/hero-illustration.svg"  alt="Hero Image"/>
          </Column>
          <Column lg={6} md={6} sm={12}>
            <S.Title>Authentication</S.Title>
            <S.Description>Sign yourself into this example form.</S.Description>
            <Input
              label="Username"
              placeholder="Username"
              type="text"
              name="username"
              addonLeft={() => <FaUser />}
              value={formik.values.username}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <Input
              label="Password"
              placeholder="Password"
              type={revealPassword ? "text" : "password"}
              name="password"
              addonLeft={() => <FaKey />}
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              addonRight={() => (revealPassword ? <FaEyeSlash /> : <FaEye />)}
              onAddonRightClick={() => setRevealPassword(!revealPassword)}
            />
            <Button
              disabled={formik.isSubmitting}
              status="primary"
              type="submit"
              text="Submit"
            />
          </Column>
        </Row>
      </form>
    </Container>
  )
}