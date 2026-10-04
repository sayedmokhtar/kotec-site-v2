document.addEventListener('DOMContentLoaded',()=>{
  const btn=document.querySelector('.menu-btn');
  const nav=document.querySelector('.nav-links');
  if(btn&&nav){btn.addEventListener('click',()=>nav.classList.toggle('open'));}
  const current=location.pathname.split('/').pop()||'index.html';
  document.querySelectorAll('.nav-links a').forEach(a=>{
    if(a.getAttribute('href')===current) a.classList.add('active');
  });
  const form=document.getElementById('contactForm');
  if(form){form.addEventListener('submit',e=>{
    e.preventDefault();
    const f=new FormData(form);
    const subject=`KOTEC Website Inquiry - ${f.get('service')||'General'}`;
    const body=`Name: ${f.get('name')}\nCompany: ${f.get('company')}\nPhone: ${f.get('phone')}\nEmail: ${f.get('email')}\nService: ${f.get('service')}\n\nMessage:\n${f.get('message')}`;
    location.href=`mailto:Support@kottec.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });}
});
