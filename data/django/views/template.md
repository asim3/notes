## عرض صفحة وعند ارسال البيانات يتم تحويل الصفحة
```python
from django.views.generic import TemplateView
from django.http import HttpResponseRedirect
from django.contrib.messages.views import SuccessMessageMixin

class OnPostRedirectView(TemplateView):
    template_name = "id_login.html"
    extra_context = None

    def get(self, request, *args, **kwargs):
        kwargs.update({'object': 123})
        return super().get(request, *args, **kwargs)

    def post(self, request, *args, **kwargs):
        url = '//youtube.com'
        return HttpResponseRedirect(url)

    def render_to_response(self, context):
        id = self.request.user.id
        balance = Table1.objects.filter(fk_user__id=id).first()
        if balance is not None:
            context.update({'aaaa': balance.current_balance})
        return super().render_to_response(context)
```
