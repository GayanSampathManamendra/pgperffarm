from datetime import datetime

from django.db import models
from django.contrib.auth.models import AbstractUser


# Create your models here.

class UserProfile(AbstractUser):
    """
    user
    """

    # first_name = None
    # last_name = None
    # user_name = models.CharField(max_length=64, verbose_name="name")
    # user_email = models.EmailField(max_length=256, verbose_name="email")
    # add_time = models.DateTimeField(default=datetime.now, verbose_name="user added time")

    class Meta:
        verbose_name = "user"
        verbose_name_plural = "user"

    def __str__(self):
        return self.user_name


class UserMachine(models.Model):
    """
    user machine
    """
    machine_sn = models.CharField(max_length=16, verbose_name="machine sn")
    machine_secret = models.CharField(max_length=32, verbose_name="machine secret")
    machine_owner = models.ForeignKey(UserProfile)
    alias = models.CharField(max_length=16, verbose_name="alias")
    os_name = models.CharField(max_length=32, verbose_name="operation system name")
    os_version = models.CharField(max_length=32, verbose_name="operation system version")
    comp_name = models.CharField(max_length=32, verbose_name="compiler name")
    comp_version = models.CharField(max_length=32, verbose_name="compiler version")
    add_time = models.DateTimeField(default=datetime.now, verbose_name="machine added time")

    class Meta:
        verbose_name = "user machines"
        verbose_name_plural = "user machines"

    def __str__(self):
        return self.machine_sn