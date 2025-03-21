import typographyStyles from "../styles/typography.module.css"
import API from "../data/api"
import Link from "next/link"
import { ReactNode } from "react"

export const FormStateApi = ({
  api,
  columnIndent,
}: {
  api?: {
    formState: {
      isDirty: ReactNode | string
      dirtyFields: ReactNode | string
      defaultValues: ReactNode | string
      touched: ReactNode | string
      isSubmitted: ReactNode | string
      isSubmitSuccessful: ReactNode | string
      isSubmitting: ReactNode | string
      submitCount: ReactNode | string
      isValid: ReactNode | string
      isValidating: ReactNode | string
      isLoading: ReactNode | string
      validatingFields: ReactNode | string
    }
  }
  columnIndent?: boolean
}) => (
  <>
    <tr>
      {columnIndent && (
        <td>
          <Link href="/docs/useform/formstate">
            <code>formState</code>
          </Link>
        </td>
      )}
      <td>
        <code>isDirty</code>
      </td>
      <td>
        <code className={typographyStyles.typeText}>boolean</code>
      </td>
      <td>{(api || API).formState.isDirty}</td>
    </tr>
    <tr>
      {columnIndent && (
        <td>
          <code>formState</code>
        </td>
      )}
      <td>
        <code>dirtyFields</code>
      </td>
      <td>
        <code className={typographyStyles.typeText}>object</code>
      </td>
      <td>{(api || API).formState.dirtyFields}</td>
    </tr>
    <tr>
      {columnIndent && (
        <td>
          <code>formState</code>
        </td>
      )}
      <td>
        <code>touchedFields</code>
      </td>
      <td>
        <code className={typographyStyles.typeText}>object</code>
      </td>
      <td>{(api || API).formState.touched}</td>
    </tr>
    <tr>
      {columnIndent && (
        <td>
          <code>formState</code>
        </td>
      )}
      <td>
        <code>defaultValues</code>
      </td>
      <td>
        <code className={typographyStyles.typeText}>object</code>
      </td>
      <td>{(api || API).formState.defaultValues}</td>
    </tr>
    <tr>
      {columnIndent && (
        <td>
          <code>formState</code>
        </td>
      )}
      <td>
        <code>isSubmitted</code>
      </td>
      <td>
        <code className={typographyStyles.typeText}>boolean</code>
      </td>
      <td>{(api || API).formState.isSubmitted}</td>
    </tr>
    <tr>
      {columnIndent && (
        <td>
          <code>formState</code>
        </td>
      )}
      <td>
        <code>isSubmitSuccessful</code>
      </td>
      <td>
        <code className={typographyStyles.typeText}>boolean</code>
      </td>
      <td>{(api || API).formState.isSubmitSuccessful}</td>
    </tr>
    <tr>
      {columnIndent && (
        <td>
          <code>formState</code>
        </td>
      )}
      <td>
        <code>isSubmitting</code>
      </td>
      <td>
        <code className={typographyStyles.typeText}>boolean</code>
      </td>
      <td>{(api || API).formState.isSubmitting}</td>
    </tr>
    <tr>
      {columnIndent && (
        <td>
          <code>formState</code>
        </td>
      )}
      <td>
        <code>isLoading</code>
      </td>
      <td>
        <code className={typographyStyles.typeText}>boolean</code>
      </td>
      <td>{(api || API).formState.isLoading}</td>
    </tr>
    <tr>
      {columnIndent && (
        <td>
          <code>formState</code>
        </td>
      )}
      <td>
        <code>submitCount</code>
      </td>
      <td>
        <code className={typographyStyles.typeText}>number</code>
      </td>
      <td>{(api || API).formState.submitCount}</td>
    </tr>
    <tr>
      {columnIndent && (
        <td>
          <code>formState</code>
        </td>
      )}
      <td>
        <code>isValid</code>
      </td>
      <td>
        <code className={typographyStyles.typeText}>boolean</code>
      </td>
      <td>
        <div>{(api || API).formState.isValid}</div>
        <p>
          <code>setError</code>는 <code>isValid</code> formState에 영향을 주지
          않습니다. <code>isValid</code>는 항상 전체 폼의 유효성 검사 결과를
          통해 결정됩니다.
        </p>
      </td>
    </tr>
    <tr>
      {columnIndent && (
        <td>
          <code>formState</code>
        </td>
      )}
      <td>
        <code>isValidating</code>
      </td>
      <td>
        <code className={typographyStyles.typeText}>boolean</code>
      </td>
      <td>{(api || API).formState.isValidating}</td>
    </tr>
    <tr>
      {columnIndent && (
        <td>
          <code>formState</code>
        </td>
      )}
      <td>
        <code>validatingFields</code>
      </td>
      <td>
        <code className={typographyStyles.typeText}>boolean</code>
      </td>
      <td>{(api || API).formState.validatingFields}</td>
    </tr>
    <tr>
      {columnIndent && (
        <td>
          <code>formState</code>
        </td>
      )}
      <td>
        <code>errors</code>
      </td>
      <td>
        <code className={typographyStyles.typeText}>object</code>
      </td>
      <td>
        필드 에러가 포함된 객체입니다. 에러 메세지를 쉽게 가져오기 위해{" "}
        <Link href="/docs/useformstate/errormessage">ErrorMessage</Link>도
        있습니다.
      </td>
    </tr>
  </>
)
