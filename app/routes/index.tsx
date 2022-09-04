import type { ActionArgs } from "@remix-run/node";

export async function action({ request }: ActionArgs) {
  const formData = await request.formData()
  const name = formData.get('name')
  const baseUrl = request.url
  const response = await fetch(`${baseUrl}/form`, {
    method: "POST", 
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: `name=${name}`
  })

  return null
}

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <form method="POST" action="/?index">
        <label>
          Name: 
          <input type="text" name="name" placeholder="Name"/>
        </label>  
        <button>Submit</button>
      </form>    
     
    </div>
  );
}
